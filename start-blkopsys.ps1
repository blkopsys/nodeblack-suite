# start-blkopsys.ps1
Write-Host "===============================" -ForegroundColor DarkGray
Write-Host "    BLKOPSYS PROTOCOL STARTUP    " -ForegroundColor Red
Write-Host "===============================" -ForegroundColor DarkGray

# Set working directory to script location
Set-Location -Path $PSScriptRoot

# Launch backend (vxon/backend)
Write-Host "`n[1/3] Starting VXON Backend..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd .\vxon\backend; node server.mjs" -WindowStyle Minimized
Start-Sleep -Seconds 3

# Launch frontend (vxon/frontend)
Write-Host "`n[2/3] Starting VXON Frontend..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd .\vxon\frontend; npm run dev" -WindowStyle Minimized
Start-Sleep -Seconds 5

# Launch browser to VXON Console
$vxonURL = "http://localhost:5173"
Write-Host "`n[3/3] Launching VXON Console UI..." -ForegroundColor Green
Start-Process $vxonURL

Write-Host "`n✅ BLKOPSYS stack launched successfully." -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor DarkGray
