<?php namespace

App\Http\Controllers;
use Illuminate\Http\Request;
use App\Contact;
use Mail;

class ContactController extends Controller {

      public function getContact() {

       return view('layouts.contactpage');
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
        // $contact->subject = $request->subject;
        $contact->phone = $request->phone;
        $contact->message = $request->message;

        $contact->save();

        // \Mail::send('contact_email',
        //      array(
        //          'name' => $request->get('name'),
        //          'email' => $request->get('email'),
        //          'subject' => $request->get('subject'),
        //          'phone_number' => $request->get('phone_number'),
        //          'user_message' => $request->get('message'),
        //      ), function($message) use ($request)
        //        {
        //           $message->from($request->email);
        //           $message->to('jainishbhimani@gmail.com');
        //        });

        return back()->with('success', 'Thank you for contact us!');

    }
}

