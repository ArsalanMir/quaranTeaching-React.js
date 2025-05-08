const Contact = () => (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact Us</h2>
      <form className="grid gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded" />
        <textarea placeholder="Message" className="p-3 border rounded h-32"></textarea>
        <button className="bg-blue-700 text-white py-3 px-6 rounded hover:bg-blue-800">Send Message</button>
      </form>
    </div>
  );
  
  export default Contact;
  