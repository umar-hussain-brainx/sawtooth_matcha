<script>
document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to elements with class .subscribe_product
    const subscribeButtons = document.querySelectorAll('.subscribe_product');
    
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
           e.preventDefault();
            console.log('Subscribe product clicked');
            let selectedPlan = document.querySelector('input[name="plan"]:checked');
            let selectedFrequency = document.querySelector('.selling_plans').value;
            let item; // Declare item variable here

            if (selectedPlan) {
                if (selectedPlan.value.includes("39")) {
                    item = {
                        "id": 40346541391985,
                        "quantity": 1,
                        "properties": {
                            "shipping_interval_unit_type": "day",
                            "shipping_interval_frequency": selectedFrequency // Set selected value as shipping_interval_frequency
                        }
                    };
                } else {
                    item = {
                        "id": 40346532937841,
                        "quantity": 1,
                    };
                }
            }
            // Get the selected value from the select box
       
            // Define the item object with custom properties
           

            // Create a new XMLHttpRequest object
            let xhr = new XMLHttpRequest();

            // Set up a POST request to Shopify's AJAX API to add the item to the cart
            xhr.open('POST', '/cart/add.js', true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            // Handle the response
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // Handle success - item added to cart
                    let responseData = JSON.parse(xhr.responseText);
                    console.log('Item added to cart:', responseData);
                    // Redirect to the checkout page or any other desired page
                    // window.location.href = '/checkout';
                } else {
                    // Handle error
                    console.error('Error adding item to cart:', xhr.statusText);
                }
            };

            // Handle network errors
            xhr.onerror = function() {
                console.error('Network error while adding item to cart:', xhr.statusText);
            };

            // Convert the item object to JSON and send it in the request body
            xhr.send(JSON.stringify({ items: [item] }));
        });
    });
});
</script>
