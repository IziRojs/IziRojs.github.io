import subprocess
import time

def press_key(key):
    script = f'tell application "System Events" to keystroke "{key}"'
    subprocess.run(["osascript", "-e", script])

def check_stop():
    script = 'tell application "System Events" to keystroke "p" using {command down}'
    result = subprocess.run(["osascript", "-e", script], capture_output=True, text=True)
    return 'p' in result.stdout

def press_keys():
    try:
        while True:
            if check_stop():
                print("Stopping program...")
                break
            press_key('3')
            time.sleep(14.1)
            press_key('3')
            time.sleep(14.1)
    except KeyboardInterrupt:
        print("Program stopped.")
if __name__ == "__main__":
    print("Running... Press 'p' to stop the script.")
    press_keys()