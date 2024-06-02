'use client'

export default function ContactForm() {
  return (
    <>
    <article>
  <div class="page-o3">
    <div class="contact">
      <div class="contact-info">
        <h2>FORMULARZ KONTAKTOWY</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          eleifend condimentum hendrerit. Phasellus vel mauris pellentesque enim
          rutrum commodo. Suspendisse viverra tellus et felis pharetra
          tristique. Phasellus vestibulum sapien nec consequat ornare. Sed in
          posuere urna. Duis eleifend volutpat nulla in maximus. Donec auctor
          sodales sapien ac tincidunt.
        </p>
      </div>

      <div class="contact-fields">
        <div class="field-1">
          <label for="f1">IMIĘ</label>
          <input class="f1" type="text" />
        </div>
        <div class="field-2">
          <label for="f1">NAZWISKO</label>
          <input class="f1" type="text" />
        </div>
        <div class="field-3">
          <label for="f1">E-MAIL</label>
          <input class="f1" type="text" />
        </div>
        <div class="field-4">
          <label for="f1">NUMER TELEFONU</label>
          <input class="f1" type="text" />
        </div>
        <div class="field-5">
          <label for="f1">WIADOMOŚĆ</label>
          <textarea class="f5" type="text"></textarea>
        </div>
        <div class="contact-button">
          <input type="submit" value="SKONTAKTUJ SIĘ Z NAMI" />
        </div>
      </div>
    </div>
  </div>
</article>
    </>
  )
}


