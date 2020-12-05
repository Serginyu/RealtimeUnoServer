#!/bin/bash

# This scripts counts the lines of code and comments in all source files
# and prints the results to the command line. It uses the commandline tool
# "cloc". You can either pass --loc, --comments or --percentage to show the
# respective values only.
# Some parts below need to be adapted to your project!

jest --coverage | awk -F "Lines        : " '{print $2}'
