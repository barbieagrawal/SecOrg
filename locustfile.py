from locust import HttpUser, task, between

class LandingPageUser(HttpUser):
    wait_time = between(1, 3)  # Wait 1-3 seconds between tasks

    @task
    def visit_landing_page(self):
        """Visit landing page"""
        with self.client.get("/", catch_response=True) as response:
            if response.status_code == 200:
                response.success()
            else:
                response.failure(f"Landing page failed: {response.status_code} - {response.text}")

class AggressiveUser(LandingPageUser):
    """Heavy load testing"""
    wait_time = between(0.1, 0.5)  # Very short wait times for stress testing

class NormalUser(LandingPageUser):
    """Normal user behavior"""
    wait_time = between(2, 5)  # More realistic timing
