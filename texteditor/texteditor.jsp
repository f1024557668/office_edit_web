<%@ page language="Java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html style="width:100%; height:100%; margin:0px; padding:0px"
	xml:lang="en" lang="en">
<head>
<!--
    Example page for how to use the Wodo.TextEditor
    This page is not usable directly from the WebODF sources, only from the build or from the released Wodo.TextEditor package.
    -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Wodo.TextEditor</title>
<script src="../js/wodotexteditor/wodotexteditor.js"
	type="text/javascript" charset="utf-8"></script>
<script src="/texteditor/FileSaver.js" type="text/javascript"
	charset="utf-8"></script>
<script src="/texteditor/localfileeditor.js" type="text/javascript"
	charset="utf-8"></script>
<script type="text/javascript">
	var editorOptions = {
		saveCallback : save,
		allFeaturesEnabled : true
	};

	/**
	 * @param1 保存文档的回调函数
	 * @param2 服务器端保存文档的文件名
	 */
	function save() {
		editor.getDocumentAsByteArray(
						function(err, data, filename) {
							if (err) {
								alert(err);
								return;
							}
							var mimetype = "application/vnd.oasis.opendocument.text", blob = new Blob(
									[ data.buffer ], {
										type : mimetype
									});
							// blob:文件流,filename:服务端保存文件名,url:要提交到服务端的rest地址
							saveAs(blob, filename, "http://localhost:8098/share/upload");
							editor.setDocumentModified(false);
						}, "question.odt");
	}

	function onEditorCreated(err, e) {
		// 页面初始化加载服务器端的文件名

		if (err) {
			alert(err);
			return;
		}

		editor = e;

		window.addEventListener("beforeunload", function(e) {
			var confirmationMessage = "请先保存文件的改动";

			if (editor.isDocumentModified()) {
				(e || window.event).returnValue = confirmationMessage;
				return confirmationMessage;
			}
		});

		editor.openDocumentFromUrl("http://ip/xxx.odt");
	}

	Wodo.createTextEditor('editorContainer', editorOptions, onEditorCreated);
</script>
</head>

<body style="width:100%; height:100%; margin:0px; padding:0px"
	onload="createEditor();">
	<div id="editorContainer"
		style="width:100%; height:100%; margin:0px; padding:0px"></div>
</body>
</html>
