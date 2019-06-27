# CSCAsg1Task1
![image](https://user-images.githubusercontent.com/40429653/60231057-9f9a0e00-98ca-11e9-8ac4-01a9d657d7c2.png)
![image](https://user-images.githubusercontent.com/40429653/60231093-b8a2bf00-98ca-11e9-8ce9-1401cbf48624.png)

## Diagram

Method | jQuery | C#
-- | -- | --
GET | $.ajax({            url: '/Api/Courses',		method: 'GET',		dataType: 'json',		cache: false        }).done(function (data) {            self.result(data);        }).fail(showError); | WebRequest request = WebRequest.Create("http://jsonplaceholder.typicode.com/posts");request.Method = "GET";using (var httpResponse = (HttpWebResponse)request.GetResponse())using (var streamReader = new StreamReader(httpResponse.GetResponseStream())){	var result = streamReader.ReadToEnd();	result.Dump();}
GET (with parameter/s) | $.ajax({                type: 'GET',                url: '/API/Courses/' + g_courseId,            }).done(function (data) {            self.result(data);        }).fail(showError); | WebRequest request = WebRequest.Create("http://jsonplaceholder.typicode.com/posts?param1=1" + postId);request.Method = "GET";using (var httpResponse = (HttpWebResponse)request.GetResponse())using (var streamReader = new StreamReader(httpResponse.GetResponseStream())){	var result = streamReader.ReadToEnd();	result.Dump();}
POST | $.ajax({            type: 'POST',			url: '/API/Courses/',			dataType: 'json',			contentType: 'application/json;',			data: webFormDataInString        }).done(function (data) {            self.result("Done!");        }).fail(showError); | WebRequest request = WebRequest.Create("https://jsonbin.org/me/test");request.Method = "POST";PostData postData = new PostData() { userId = 1, title = "yowko", body = "yowko test body" };request.ContentType = "application/json; charset=utf-8";request.Headers.Add("authorization", "token apikey");using (var streamWriter = new StreamWriter(request.GetRequestStream())){    string json = new JavaScriptSerializer().Serialize(postData);    streamWriter.Write(json);    streamWriter.Flush();}using (var httpResponse = (HttpWebResponse)request.GetResponse())using (var streamReader = new StreamReader(httpResponse.GetResponseStream())){    var result = streamReader.ReadToEnd();    result.Dump();}
PUT | $.ajax({                type: 'PUT',                url: '/API/Courses/' + g_courseId,                dataType: 'json',                contentType: 'application/json;',                data: webFormDataInString            }).done(function (data) {            self.result("Done!");        }).fail(showError); | WebRequest request = WebRequest.Create("https://jsonbin.org/yowko/test/_perms");request.Method = "PUT";request.Headers.Add("authorization", "token apikey");using (var httpResponse = (HttpWebResponse)request.GetResponse())using (var streamReader = new StreamReader(httpResponse.GetResponseStream())){	var result = streamReader.ReadToEnd();	result.Dump();}
DELETE | $.ajax({                type: 'DELETE',                url: '/API/Courses/' + g_courseId            }).done(function (data) {            self.result("Done!");        }).fail(showError); | WebRequest request = WebRequest.Create("https://jsonbin.org/yowko/test/_perms");request.Method = "DELETE";request.Headers.Add("authorization", "token apikey");using (var httpResponse = (HttpWebResponse)request.GetResponse())using (var streamReader = new StreamReader(httpResponse.GetResponseStream())){	var result = streamReader.ReadToEnd();	result.Dump();}





