<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\emp_skill;
use App\Models\personal_info;
use Mail;


class form_dataController extends Controller
{
    public function storeInformation2(Request $request)
    {
        // dd("2");
        // dd($request->android);
        $new = new emp_skill();
        $new->technical_skill = $request->careers_technical_skills;
        $new->personal_attribute = $request->careers_personal_attributes;
        $new->professional_detail = $request->careers_professional_history;
        $new->work_areas = $request->careers_work_areas;
        $new->dislike_current_company = $request->careers_dislike_about_current_company;
        $new->describe_co_workers = $request->careers_coworker_describe_as_person;
        $new->change_company_reason = $request->careers_reason_for_looking_job;
        $new->night_sheeft = $request->careers_ready_to_work_in_night_shift;
        $new->family_background = $request->careers_describe_family_background;
        $new->save();

        $new1 = new personal_info();
        $new1->position_applied = $request->android;
        // $services->qr_type = $req->qrType;

        $new1->u_age = $request->careers_age;
        $new1->u_gender = $request->careers_gender;
        $new1->u_location = $request->careers_current_location;
        $new1->u_qualification = $request->careers_qualification;
        $new1->ssc = json_encode($request->careers_educations_ssc);
        $new1->hsc = json_encode($request->careers_educations_hsc);
        $new1->graducation = json_encode($request->careers_educations_graducation);
        $new1->pg_diploma = json_encode($request->careers_educations_pg_diploma);
        $new1->other_graducation = json_encode($request->careers_educations_other_qualification);
        // $new->hsc = $request->careers_educations[hsc][school];
        // $new->graducation = $request->careers_qualification;
        // $new->pg_diploma = $request->careers_qualification;
        // $new->other_graducation = $request->careers_qualification;
        $new1->experience_year = $request->careers_experience;
        $new1->present_salary = $request->careers_present_salary;
        $new1->type_e_seeking = $request->careers_type_of_employment_seeking;
        // $new->resume = $request->careers_describe_family_background;


        $new1->u_gmail = $request->careers_contact_email;
        $new1->u_name = $request->careers_fullname;
        $new1->u_number  = $request->careers_contact_number;

        $new1->save();
        // return view('form');
        // return redirect('/');

        $data = [
            //   'subject' => $request->subject,
            'position_applied' => $request->careers_applied_position,
            'age' => $request->careers_fullname,
            'gender' => $request->careers_fullname,
            'location' => $request->careers_fullname,
            'qualification' => $request->careers_fullname,
            'ssc' => json_encode($request->careers_educations_ssc),
            'hsc' => json_encode($request->careers_educations_hsc),
            'graducation' => json_encode($request->careers_educations_graducation),
            'pg_diploma' => json_encode($request->careers_educations_pg_diploma),
            'other_graducation' => json_encode($request->careers_educations_other_qualification),
            'experience_year' => $request->careers_experience,
            'present_salary' => $request->careers_present_salary,
            'Type_e_seeking' => $request->careers_type_of_employment_seeking,
            'email' => $request->careers_contact_email,
            'name' => $request->careers_fullname,
            'phone' => $request->careers_contact_number,

        ];

        $u_gmail = $request->careers_contact_email;
        $u_name = $request->careers_fullname;
        $u_number  = $request->careers_contact_number;
        // $service = $request->select;


        Mail::send('email-template', $data, function ($message) use ($u_name) {
            $message->to('social@webitoinfotech.com', 'Webito Infotech')->subject('Laravel Basic Testing Mail');
            $message->from('social@webitoinfotech.com', 'Webito Infotech');
        });
        Mail::send('email-user', $data, function ($message) use ($u_gmail, $u_name) {
            $message->to($u_gmail, $u_name)->subject('Laravel Basic Testing Mail');
            $message->from('social@webitoinfotech.com', 'Webito Infotech');
        });
        return redirect()->back()->with(['success' => 'Contact Form Submit Successfully']);

        // return back()->with(['message' => 'Email successfully sent!']);













        // return redirect()->back()->with(['success' => 'Contact Form Submit Successfully']);


        // \Mail::send('contactMail', array(
        //     'u_name' => $new['careers_fullname'],
        //     'u_age' => $new['careers_age'],
        //     'u_gender' => $new['careers_gender'],
        //     'u_location' => $new['careers_current_location'],
        //     'u_qualification' => $new['careers_qualification'],
        // ), function ($message) use ($request) {
        //     $message->from($request->email);
        //     $message->to('shivalisavaliya012@gmail.com', 'Admin')->subject($request->get('subject'));
        // });

        // return redirect()->back()->with(['success' => 'Contact Form Submit Successfully']);
    }

    public function sendEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            //   'subject' => 'required',
            'name' => 'required',
            'content' => 'required',
        ]);
        $data = [
            //   'subject' => $request->subject,
            'name' => $request->name,
            'email' => $request->email,
            'content' => $request->content,
            'phone' => $request->phone,
            'select' => $request->select
        ];
 return redirect()->back()->with(['success' => 'Contact Form Submit Successfully']);
    }



    // public function storeInformation1(Request $request)
    // {
    //     // dd("1");
    //     // $request->validate([
    //     //     'name' => 'required',
    //     //     'u_gmail' => 'required|email',
    //     //     'u_number' => 'required|digits:10|numeric',
    //     //     // 'subject' => 'required',
    //     //     // 'message' => 'required',
    //     // ]);



    //     // return view('form');
    //     return redirect('/');



    //     // \Mail::send('contactMail', array(
    //     //     'u_name' => $new['careers_fullname'],
    //     //     'u_age' => $new['careers_age'],
    //     //     'u_gender' => $new['careers_gender'],
    //     //     'u_location' => $new['careers_current_location'],
    //     //     'u_qualification' => $new['careers_qualification'],
    //     // ), function ($message) use ($request) {
    //     //     $message->from($request->email);
    //     //     $message->to('shivalisavaliya012@gmail.com', 'Admin')->subject($request->get('subject'));
    //     // });

    //     // return redirect()->back()->with(['success' => 'Contact Form Submit Successfully']);
    // }
}
