<?php namespace

App\Http\Controllers;
use Illuminate\Http\Request;
use App\Contact;
use Mail;

class contactController extends Controller {

      public function getContact() {

       return view('layouts.contactpage');
     }

      public function saveContact(Request $request) {

        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'message' => 'required'
        ]);

        $contact = new Contact;

        $contact->name = $request->name;
        $contact->email = $request->email;
        // $contact->subject = $request->subject;
        $contact->phone_number = $request->phone;
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





<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class EmailController extends Controller
{
    public function create()
    {
        return view('email');
    }

    public function sendEmail(Request $request)
    {
        $request->validate([
          'email' => 'required|email',
          'subject' => 'required',
          'name' => 'required',
          'content' => 'required',
        ]);

        $data = [
          'subject' => $request->subject,
          'name' => $request->name,
          'email' => $request->email,
          'content' => $request->content
        ];

        Mail::send('email-template', $data, function($message) use ($data) {
          $message->to($data['email'])
          ->subject($data['subject']);
        });

        return back()->with(['message' => 'Email successfully sent!']);
    }
}
