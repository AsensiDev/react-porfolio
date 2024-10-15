import './contact.css'

export default function Contact() {
  return (
    <section className="form-section" id='contact'>
        <form>
            <h2>👇Contact Me</h2>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="textarea" placeholder='Message' />
            <input type="submit" value='Send' />
        </form>
    </section>
  )
}
