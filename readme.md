# VMAF-GUI
![GitHub](https://img.shields.io/github/license/withenex/vmaf-gui)

## About
VMAF is a tool developed by Netflix to grade the quality of a compressed video file in comparison to the Original. However, VMAF is only available through the commandline or as an extension to FFMPEG. If you're like me, you find the functionality of VMAF very useful but very time consuming and confusing to use at first. This tool I have built simply adds a gui to the program to make it easy to use.

## Build
Using visual studio Just click the .sln file then compile for your system. In the build folder you'll have to provide your own copy of `ffmpeg`, `vmaf`, and the model files for vmaf in a subfolder named `model`.
