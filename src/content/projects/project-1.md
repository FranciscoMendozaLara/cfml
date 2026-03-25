---
title: "UrbanSound8k — Sound Classification with MFCC Features"
description: "Classifying 10 urban sound categories using Mel-Frequency Cepstral Coefficients extracted from raw audio waveforms. Visualises MEL-Spectrograms for model interpretability."
tag: "Audio · Deep Learning"
order: 1
image: "images/UrbanSound8k.png"
github: "https://github.com/FranciscoMendozaLara"
date: "2021"
---

## Overview

The UrbanSound8k dataset contains 8732 labelled urban sound excerpts across 10 classes — air conditioners, car horns, children playing, dog barks, drilling, engine idling, gunshots, jackhammers, sirens, and street music.

## Approach

A common technique for sound analysis is the **Mel-Frequency Cepstral Coefficients (MFCC)**, which capture the short-term power spectrum of a sound in a way that approximates the human auditory system. These coefficients were used as features to train a classification model.

MEL-Spectrograms were computed and visualised for interpretability — for example, *Dancing Queen* by ABBA and *Comfortably Numb* by Pink Floyd produce visually distinct spectrograms, reflecting their very different sonic textures.

## Results

The classifier achieved strong performance across all 10 categories, demonstrating the effectiveness of MFCC features for urban sound recognition.

## Tools

- Python
- librosa (audio feature extraction)
- scikit-learn / Keras
- Matplotlib
