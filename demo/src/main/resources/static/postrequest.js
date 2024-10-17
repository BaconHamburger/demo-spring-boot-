$(document).ready(
		function() {
			
			alert("in ready....");

			// SUBMIT FORM
			$("#bookForm").submit(function(event) {
				// Prevent the form from submitting via the browser.
				event.preventDefault();
				ajaxPost();
			});

			function ajaxPost() {
				
				alert("in post....");

				// PREPARE FORM DATA
				var formData = {
					bookId : $("#bookId").val(),
					bookName : $("#bookName").val(),
					author : $("#author").val()
				}
				
				alert(formData);
				var formDataJson = JSON.stringify(formData);
				alert(formDataJson);

				// DO POST
				$.ajax({
					type : "POST",
					//contentType : "application/json",
					url : "http://localhost:8080/saveBook",
					//data : JSON.stringify(formData),
					data: formDataJson,
					 headers : {
                     "Content-Type" : "application/json"
                  	},
					//dataType : 'json',
					success : function(result) {
						if (result.status == "success") {
							alert("success");
							$("#postResultDiv").html(
									"" + result.data.bookName
											+ "Post Successfully! <br>"
											+ "---> Congrats !!" + "</p>");
						} else {
							alert("failed");
							$("#postResultDiv").html("<strong>Error</strong>");
						}
						console.log(result);
					},
					error : function(e) {
						alert("Error!")
						console.log("ERROR: ", e);
					}
				});

			}

		})