from flask import Flask, request, jsonify
from flask_cors import CORS
from neuralcore import NeuralCore

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

core = NeuralCore()
core.load_model("./models/vxon_lite_sim.pt")

@app.route('/api/classify', methods=['POST'])
def classify_prompt():
    data = request.json
    prompt = data.get("prompt", "")
    result = core.classify_prompt(prompt)
    core.log_trace(result)
    return jsonify(result)

@app.route('/api/logs', methods=['GET'])
def get_logs():
    return jsonify(core.export_memory())

@app.route('/api/feedback', methods=['POST'])
def feedback_adjust():
    data = request.json
    success = core.feedback_adjust(data)
    return jsonify({"success": success})

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "NeuralCore active", "version": "1.0"})

if __name__ == '__main__':
    app.run(port=8000, debug=True)
