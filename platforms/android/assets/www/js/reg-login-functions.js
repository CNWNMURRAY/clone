<script>
$("#login").click(function (){
	var Lform=$("#Login_form").serialize();

	console.log(Lform);
	$.post("http://localhost/SPA/index.php"Lform,function(response){
		alert(response);
	})
});
</script>