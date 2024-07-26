from flask import Flask, jsonify, Response
from flask_cors import CORS
import cv2
import pickle
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array

app = Flask(__name__)
CORS(app)

cap = cv2.VideoCapture(0)

# Replace these paths with your own
with open('CarPark', 'rb') as f:
    posList = pickle.load(f)

width, height = 240, 110
model = load_model('models/car_detection_model.keras')

def checkParkingSpace(img, imgPro):
    spaceCounter = 0
    spaceStatus = []

    for i, pos in enumerate(posList):
        x, y = pos
        imgCrop = img[y:y + height, x:x + width]
        imgCrop_resized = cv2.resize(imgCrop, (150, 150))
        img_array = img_to_array(imgCrop_resized)
        img_array = np.expand_dims(img_array, axis=0) / 255.0
        prediction = model.predict(img_array)
        label = 'Car' if prediction[0][0] < 0.5 else 'No Car'
        spaceStatus.append({"space": i + 1, "status": "Occupied" if label == "Car" else "Free"})
        color = (0, 0, 255) if label == 'Car' else (0, 255, 0)
        thickness = 5 if label == 'Car' else 2
        cv2.rectangle(img, pos, (pos[0] + width, pos[1] + height), color, thickness)
        cv2.putText(img, label, (x, y + height - 3), cv2.FONT_HERSHEY_SIMPLEX, 0.9, color, 2)
        cv2.putText(img, str(i + 1), (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 255, 0), 2)
        if label == 'Car':
            spaceCounter += 1

    return spaceCounter, len(posList), spaceStatus

def generate_frames():
    while True:
        success, img = cap.read()
        if not success:
            break

        imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        imgBlur = cv2.GaussianBlur(imgGray, (3, 3), 1)
        imgThreshold = cv2.adaptiveThreshold(imgBlur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                             cv2.THRESH_BINARY_INV, 25, 16)
        imgMedian = cv2.medianBlur(imgThreshold, 5)
        kernel = np.ones((3, 3), np.uint8)
        imgDilate = cv2.dilate(imgMedian, kernel, iterations=1)

        space_counter, total_length, space_status = checkParkingSpace(img, imgDilate)
        ret, buffer = cv2.imencode('.jpg', img)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/parking-status', methods=['GET'])
def parking_status():
    ret, img = cap.read()
    if not ret:
        return jsonify([])

    imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray, (3, 3), 1)
    imgThreshold = cv2.adaptiveThreshold(imgBlur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                         cv2.THRESH_BINARY_INV, 25, 16)
    imgMedian = cv2.medianBlur(imgThreshold, 5)
    kernel = np.ones((3, 3), np.uint8)
    imgDilate = cv2.dilate(imgMedian, kernel, iterations=1)

    space_counter, total_length, space_status = checkParkingSpace(img, imgDilate)
    return jsonify(space_status)

@app.route('/video-feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
