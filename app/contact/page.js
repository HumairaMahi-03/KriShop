"use client";
export default function ContactPage() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
            <form style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" style={{ marginBottom: "10px", padding: "8px" }} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" style={{ marginBottom: "10px", padding: "8px" }} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" style={{ marginBottom: "10px", padding: "8px" }}></textarea>

                <button type="submit" style={{ padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
        </div>
    );
}