package Assignment;

//import org.json.simple.JSONObject;
import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;

import java.util.List;
import java.util.Map;


public class Testassignment {

	@Test
	public void testStatuscode() {
		Response resp = get("http://jsonplaceholder.typicode.com/posts/1");
		int code = resp.getStatusCode();

		Assert.assertEquals(code, 200);
		System.out.println("Status code is " + code);
	}

	@Test
	public void testGetData() {
		Response resp = get("http://jsonplaceholder.typicode.com/posts/1");
		String bdata = resp.asString();	
		int code3 = resp.getStatusCode();
		Assert.assertEquals(code3, 200);
		System.out.println("Data is " + bdata);
	}

	@Test
	public void testDeleteData() {
		Response resp = delete("http://jsonplaceholder.typicode.com/posts/1");
		int code1 = resp.getStatusCode();		
		Assert.assertEquals(code1, 200);
		System.out.println("Status code is " + resp);
	
	}

	@Test
	public void testAddData() {
		RequestSpecification req = RestAssured.given();
		req.header("ContentType", "application/json");
		JSONObject jsonparam = new JSONObject();
		
		jsonparam.put("userId", "555");
		jsonparam.put("id", "999");
		jsonparam.put("title", "santosh");
		jsonparam.put("body", "my test example");
		req.body(jsonparam.toJSONString());
		Response resp = req.post("http://jsonplaceholder.typicode.com/posts");
		int code2 = resp.getStatusCode();
		Assert.assertEquals(code2, 201);
		System.out.println("Status code is " + code2);
	}
}

