@echo off
setlocal enabledelayedexpansion

echo ===============================
echo    BLKOPSYS PROTOCOL STARTUP
echo ===============================

REM Set paths
set BACKEND_DIR=%CD%\vxon\backend
set FRONTEND_DIR=%CD%\vxon\frontend

REM Start Backend
echo [1/3] Checking VXON Backend dependencies...
cd /d "%BACKEND_DIR%"
if not exist "node_modules" (
    echo    [!] node_modules not found, running npm install...
    call npm install
)
echo    [✓] Launching backend server...
start cmd /k "cd /d %BACKEND_DIR% && node server.mjs"

REM Start Frontend
echo [2/3] Checking VXON Frontend dependencies...
cd /d "%FRONTEND_DIR%"
if not exist "node_modules" (
    echo    [!] node_modules not found, running npm install...
    call npm install
)
echo    [✓] Launching frontend UI...
start cmd /k "cd /d %FRONTEND_DIR% && npm run dev"

REM Launch browser
timeout /t 3 >nul
echo [3/3] Opening VXON Console at http://localhost:5173 ...
start http://localhost:5173

echo.
echo ✅ BLKOPSYS stack launched successfully.
echo ==============================
exit
