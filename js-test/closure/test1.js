// 直接在函数f()定义作用域中返回f执行结果
// 返回结果自然是内部变量“local scope”

var scope = "global scope";
function checkscope(){
	var scope = "local scope";
	function f(){ return scope;}
	return f();
}
checkscope();