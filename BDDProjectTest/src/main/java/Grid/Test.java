package Grid;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;
public class Test {
	
	public static WebDriver driver;
	 
	 public static void main(String[]  args) throws MalformedURLException, InterruptedException{
//	 
	 String URL = "https://classic.crmpro.com/index.html";
	 String Node = "http://192.168.0.2:4444/wd/hub";
	 DesiredCapabilities cap = DesiredCapabilities.chrome();
//	 
	 driver = new RemoteWebDriver(new URL(Node), cap);
//	 
	 driver.navigate().to(URL);
	 System.out.println(driver.getTitle());
	// driver.get("https://classic.crmpro.com/index.html");
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.MINUTES);
	// Thread.sleep(5000);
		
		driver.findElement(By.name("username")).sendKeys("ksantosh1978");
		driver.findElement(By.name("password")).sendKeys("iphone2953");
		
		
		WebElement loginBtn = driver.findElement(By.xpath("//*[@id=\"loginForm\"]/div/div/input"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);
		
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//*[@id=\"navmenu\"]/ul/li[4]/a"))).build().perform();
		driver.findElement(By.xpath("//*[@id=\"navmenu\"]/ul/li[4]/ul/li[1]/a")).click();
	driver.quit();
	 } 


}