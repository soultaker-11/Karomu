<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Karomu Quick Loan Services</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; color: #333; }
        header { background: #2c3e50; color: #fff; padding: 1rem; text-align: center; }
        .container { width: 80%; margin: auto; overflow: hidden; padding: 20px; }
        .services { display: flex; justify-content: space-around; background: #f4f4f4; padding: 20px; border-radius: 8px; }
        .service-box { text-align: center; flex: 1; }
        .form-container { background: #fff; padding: 20px; margin-top: 20px; border: 1px solid #ddd; border-radius: 8px; }
        input, select, textarea { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; }
        button { background: #27ae60; color: white; padding: 10px 20px; border: none; cursor: pointer; border-radius: 4px; }
        button:hover { background: #219150; }
        footer { background: #2c3e50; color: #fff; text-align: center; padding: 20px; margin-top: 20px; }
        .success { color: green; font-weight: bold; }
    </style>
</head>
<body>

<header>
    <h1>Karomu Quick Loan Services</h1>
    <p>Your Trusted Partner for Loans & Mobility</p>
</header>

<div class="container">
    <section>
        <h2>Our Services</h2>
        <div class="services">
            <div class="service-box">
                <h3>Quick Loans</h3>
                <p>Instant financial support with flexible repayment.</p>
            </div>
            <div class="service-box">
                <h3>New & Used Bikes</h3>
                <p>Quality motorcycles at affordable prices.</p>            </div>
            <div class="service-box">
                <h3>Tuk-tuks</h3>
                <p>Reliable 3-wheelers for business and personal use.</p>
            </div>
        </div>
    </section>

    <section class="form-container">
        <h2>Apply for Service</h2>
        <?php 
        if(isset($_GET['status']) && $_GET['status'] == 'success') {
            echo "<p class='success'>Application submitted successfully!</p>";
        }
        ?>
        <form action="process.php" method="POST">
            <input type="text" name="name" placeholder="Full Name" required>
            <input type="email" name="email" placeholder="Email Address" required>
            <input type="text" name="phone" placeholder="Phone Number" required>
            <select name="service" required>
                <option value="">Select Service</option>
                <option value="Loan">Loan Application</option>
                <option value="Bike">Buy a Bike</option>
                <option value="Tuk-tuk">Buy a Tuk-tuk</option>
            </select>
            <textarea name="message" rows="4" placeholder="Additional details..."></textarea>
            <button type="submit">Submit Application</button>
        </form>
    </section>
</div>

<footer>
    <p><strong>Location:</strong> 2nd Street, Kiboga</p>
    <p><strong>Contacts:</strong> +256 700 000000 | +256 780 000000</p>
    <p><strong>Email:</strong> info@karomu.com | sales@karomu.com</p>
    <p><strong>Availability:</strong> Mon - Sat (08:00 AM - 06:00 PM)</p>
</footer>

</body>
</html>```

### 2. process.php
This script handles the form submission logic.

```php
<?phpif ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $name = htmlspecialchars(strip_tags($_POST['name']));
    $email = htmlspecialchars(strip_tags($_POST['email']));
    $phone = htmlspecialchars(strip_tags($_POST['phone']));
    $service = htmlspecialchars(strip_tags($_POST['service']));
    $message = htmlspecialchars(strip_tags($_POST['message']));

    // Email Configuration
    $to = "info@karomu.com";
    $subject = "New Application: $service from $name";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\nDetails: $message";
    $headers = "From: webmaster@karomu.com";

    // Send email (requires a configured mail server)
    // mail($to, $subject, $body, $headers);

    // Redirect back with success message
    header("Location: index.php?status=success");
    exit();
} else {
    header("Location: index.php");
    exit();
}
