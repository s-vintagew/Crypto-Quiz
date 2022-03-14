function check()
{
	var str="souhardya@gmail.combhavin@gmail.com";
	var x=document.getElementById("name").value;
	var y=document.getElementById("mail").value;
	if(y==""||x=="")
		{
			alert("Enter Credentials");
			return false;
		}
	else if(str.indexOf(y)!=-1)
		return true;
	else
		{
			alert("Please Enter the Email you used to Register in the College");
			return false;
		}
}
