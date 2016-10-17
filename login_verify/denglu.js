/**
 * Created by jinlinlin on 2016/5/22.
 */
var logbutton=document.getElementById('logbutton');
    logbutton.addEventListener('click',function(){
        var log=document.getElementById('log');
        var loginbox1=document.getElementById('loginbox1');
        loginbox1.style.display='block';
        log.style.display='none';
        return false;
    },false);

var close=document.getElementById('close');
close.addEventListener('click',function(){
    var log=document.getElementById('log');
    var loginbox1=document.getElementById('loginbox1');
    loginbox1.style.display='none';
    log.style.display='block';
    return false;
},false);

submit_button = document.getElementById('lg_button');
submit_button.onclick = function(){
	if(jiancha()==true){
		log_form.submit()
	}
};

// submit_button.addEventListener('click', jiancha, false)


var log_form=document.getElementById('log_form');
function jiancha(){
    function check() {
        var username = document.getElementById('username').value;
        var password=document.getElementById('password').value;
		var loginbox1=document.getElementById('loginbox1');
        var yonghuming1 = /0?(13|14|15|18)[0-9]{9}/;
        var yonghuming2=/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        if (yonghuming1.test(username)||yonghuming2.test(username)) {			
			if(/^\s*$/.test(password)){
				alert('密码不能为空');
				return false;
			}else if(!/\S{6,10}/.test(password)){
				alert('请确认您输入的密码在6到10位！')
				return false;
			}else{return true}
        }else{
            alert('请输入正确的邮箱或手机号！');
            return false;			
        }
     }
    return check();
};





