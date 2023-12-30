<?php

namespace App\Http\Controllers;
use App\Models\Contact;
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



        $contact = new Contact;

        $contact->username = $request->name;
        $contact->email = $request->email;
        $contact->service = $request->subject;
        // $contact->phone = $request->phone;
        $contact->message = $request->content;
        $contact->save();

       // dd($data['email']);
        //dd($data['subject']);

        $email = $request->email;
        $subject = $request->subject;
        Mail::send('email-template', $data, function($message) use($subject){
            $message->to('jainishbhimani@gmail.com')
            ->subject($subject);
          });

          Mail::send('email-user', $data, function($message) use($email){
            $message->to($email)
            ->subject('Request Mail');
          });

        return back()->with(['message' => 'Email successfully sent!']);
    }
}
