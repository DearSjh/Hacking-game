function stop(){
alert('破解这很简单的，加油！');
return false;
}
document.oncontextmenu=stop;

function SymError()
{
  return true;
}
window.onerror = SymError;