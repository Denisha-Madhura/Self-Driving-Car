# Self-Driving Car with JavaScript

This project is a personal recreation and learning experience based on the "Self-Driving Car with JavaScript Course" tutorial by Radu, available on the freeCodeCamp.org YouTube channel. The course teaches you how to build a self-driving car simulation from scratch, implementing all components without external libraries.

# Project Demo
  [Screencast from 2025-09-09 22-16-14.webm](https://github.com/user-attachments/assets/fdc429fc-3654-49c0-9c6a-015d076a3ab2)

# Getting Started
To run this project, simply open the index.html file in your preferred web browser. All the necessary HTML, CSS, and JavaScript are contained within that single file, so no additional steps are required.


# Features

  - From-Scratch Physics: The car's movement, including realistic acceleration, braking, and steering, is simulated using core JavaScript and vector math.
  - Dynamic Environment: The simulation includes a realistic road and a dynamic camera that follows the car, giving it a third-person, "drone" perspective.
  - Virtual Sensors: The car is equipped with sensors that detect road boundaries and other obstacles, providing the necessary input for its "brain."
  - From-Scratch Neural Network: The core of the project is a neural network built from the ground up, providing a deep understanding of how these powerful algorithms work.
  - Single-File Application: All of the project's logic, from rendering to the neural network, is contained within a single index.html file.

# How it Works

The autonomous driving simulation operates on a continuous loop, combining virtual sensing, neural network processing, and a genetic algorithm for learning.
Sensing the Environment

The car "sees" the world using virtual ray sensors. These are invisible lines that project outwards from the front of the car. The code then calculates the intersection points of these rays with the road's borders and any other cars on the road. The distances to these intersection points are the key data points for the neural network.
The Neural Network as the Brain

The sensor data is fed directly into the neural network, which acts as the car's brain. The network is made up of layers:

  - Input Layer: Receives the sensor data (the distances to the intersection points).
  - Hidden Layers: These intermediate layers perform computations on the input data, passing the results forward.
  - Output Layer: Produces commands for the car, such as accelerate, brake, turn left, and turn right.

Based on the values and weights of the network's connections, it decides which commands to activate to keep the car on the road.
Learning Through Evolution

The car learns to drive using a genetic algorithm. Instead of being explicitly programmed to handle every situation, the simulation runs many cars at once, each with a slightly different neural network "brain." The cars that travel the farthest are considered the most successful. Their neural network weights are then "mutated" and passed on to the next generation of cars, similar to natural selection. This process repeats over many generations, leading to a highly optimized and autonomous car that has "learned" to navigate the road effectively.

# Project Credit
This project is a recreation of the tutorial by Radu, a computer science PhD and creative tech YouTuber. The full course can be found on the freeCodeCamp.org channel.
Source Video: Self-Driving Car with JavaScript Course – Neural Networks and Machine Learning
