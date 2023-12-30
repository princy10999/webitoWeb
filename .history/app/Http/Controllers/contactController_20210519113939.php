<?php namespace

App\Http\Controllers;
use Illuminate\Http\Request;
use App\Contact;
use Mail;

class ContactController extends Controller {

      public function getContact() {

       return view('contact');
     }

      public function saveContact(Request $request) {

        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'phone_number' => 'required',
            'message' => 'required'
        ]);

        $contact = new Contact;

        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->subject = $request->subject;
        $contact->phone_number = $request->phone_number;
        $contact->message = $request->message;

        $contact->save();

        return back()->with('success', 'Thank you for contact us!');

    }
}
