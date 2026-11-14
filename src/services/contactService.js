export async function submitContactForm(formData) {
  const response = await fetch("https://worldwiseedu.org/api/contact-submit.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to submit the enquiry.");
  }

  return result;
}
