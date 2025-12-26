#!/bin/bash

# --- BASH STOPWATCH ---
# Description: A simple, precise stopwatch for the terminal.
# Usage: ./stopwatch.sh

# Function to handle exit (Ctrl+C)
cleanup() {
    echo -e "\n\nFinal Time: $time_display"
    echo "Stopwatch closed."
    exit 0
}

# Trap SIGINT (Ctrl+C)
trap cleanup SIGINT

clear
start_time=$(date +%s)

echo "============================"
echo "    BASH STOPWATCH ACTIVE   "
echo "============================"
echo " Press [CTRL+C] to stop "
echo "----------------------------"

while true; do
    current_time=$(date +%s)
    elapsed=$((current_time - start_time))

    # Calculate hours, minutes, and seconds
    hours=$((elapsed / 3600))
    mins=$(( (elapsed % 3600) / 60 ))
    secs=$((elapsed % 60))

    # Format the time string
    time_display=$(printf "%02dh %02dm %02ds" $hours $mins $secs)

    # Use \r to overwrite the same line in the terminal
    printf "\r  Running: %s" "$time_display"
    
    sleep 1
done
