⏱️ Terminal Stopwatch Logic
This project implements a high-precision stopwatch using Bash and Unix System Time. Instead of relying on a simple counter (which can drift due to CPU lag), this script calculates the delta between system timestamps.
🧠 Logical Workflow
The script operates on a four-step loop to ensure accuracy and terminal cleanliness:Epoch Initialization: Upon execution, the script captures the current Unix Epoch (the total number of seconds elapsed since January 1, 1970) and stores it as the start_point.
Difference Calculation: Every one-second cycle, the script polls the system clock again and subtracts the start_point from the current_time.
Unit Conversion: The resulting raw integer (seconds) is processed through modular arithmetic to derive human-readable units:
Hours: Total seconds divided by 3600.
Minutes: Remainder of hours divided by 60.
Seconds: Remainder of minutes.
Buffer Overwriting: Using the Carriage Return (\r) escape character, the script moves the terminal cursor back to the start of the line rather than printing a new line. This creates a "live" UI effect in the console.
🛠️ Requirements & Execution
Prerequisites Environment: Any POSIX-compliant shell (Bash, Zsh, Dash).
Permissions: The file must have execute permissions (755) to run.
User Interaction Start: Triggered by executing the script file.
Pause/Stop: Handled via the SIGINT signal (typically Ctrl+C).
Cleanup: The script uses a trap function to catch the exit signal and print the final elapsed time before returning control to the shell prompt.
Why document it this way?
This approach is excellent for GitHub because:
Educational: It explains how it works (Unix Epochs vs. Counters).
Professional: It treats the script as a piece of software architecture.
Clean: It avoids cluttering the main page if you prefer users to look at the stopwatch.sh file directly for the source.
