#!/bin/bash

echo "Today is: " `date`

echo -e "\nEnter the path of file: "
read

echo -e "\nThe path: $REPLY has following files and folders."
ls -la $REPLY