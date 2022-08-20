#!/bin/bash
. venv/bin/activate
while true; do
    python -m flask deploy
    if [[ "$?" == "0" ]]; then
        break
    fi
    echo Deploy command failed, retrying in 5 secs...
    sleep 5
done
# --access-logfile -: write access logs to console
# --error-logfile logs.log --capture-output: write print statements and errors in app to logs.log
exec gunicorn -b :5000 --access-logfile - --error-logfile logs.log --capture-output blogging:app