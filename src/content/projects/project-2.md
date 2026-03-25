---
title: "Cepstral Analysis for Acoustic Vibrations"
description: "Applying cepstral decomposition to separate voiced and unvoiced speech signals and analyse impulse responses in acoustic systems."
tag: "Signal Processing"
order: 2
image: "images/impulse_response.PNG"
github: "https://github.com/FranciscoMendozaLara"
date: "2021"
---

## Overview

Cepstral analysis is a technique used for speech and sound decomposition. For discrete-time signals, the cepstrum is defined as the inverse discrete-time Fourier Transform of the natural logarithm of the discrete-time Fourier Transform of the signal.

## Background

Humans produce speech through controlled movements of the lungs, vocal cords, tongue, and lips. Speech can be separated into two types:

- **Voiced speech** — has a roughly regular pattern in its time-frequency structure
- **Unvoiced speech** — does not share this regularity

Cepstral analysis allows us to separate these components and study the impulse response of the vocal tract independently.

## Application

This project applied cepstral techniques to acoustic vibration data, demonstrating how the method can isolate signal components and identify system characteristics from recorded responses.

## Tools

- Python / MATLAB
- NumPy, SciPy
- Matplotlib
