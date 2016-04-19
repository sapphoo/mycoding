// 直接返回函数f，在f定义的作用域之外执行f
// 结果还是返回其定义环境中的scope变量"local scope"
// 这个就是闭包

var scope = "global scope";
function checkscope(){
	var scope = "local scope";
	function f(){ return scope;}
	return f;
}
checkscope()();