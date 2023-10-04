import React from 'react'

const Aistronomy = () => {
  return (
    <form action="" class="team-form" className='flex flex-col justify-center'>
    <div class="form-row">
        <label for="teamName">Team Name:</label>
        <input type="text" id="teamName" name="teamName" placeholder="Enter team name" required />
    </div>
    <div class="form-row">
        <label for="teamLeaderName">Team Leader Name:</label>
        <input type="text" id="teamLeaderName" name="teamLeaderName" placeholder="Enter team leader name" required />
    </div>
    <div class="form-row">
        <label for="teammateName1">Teammate Name 1:</label>
        <input type="text" id="teammateName1" name="teammateName1" placeholder="Enter teammate's name" required />
    </div>
    <div class="form-row">
        <label for="teamLeadEmail">Team Leader Email:</label>
        <input type="email" id="teamLeadEmail" name="teamLeadEmail" placeholder="Enter team leader's email" required />
    </div>
    <div class="form-row">
        <label for="teammateEmail1">Teammate 1 Email:</label>
        <input type="email" id="teammateEmail1" name="teammateEmail1" placeholder="Enter teammate's email" required />
    </div>
    <div class="form-row">
        <label for="teamLeadDept">Team Leader Department:</label>
        <input type="text" id="teamLeadDept" name="teamLeadDept" placeholder="Enter team leader's department" required />
    </div>
    <div class="form-row">
        <label for="teammateDept1">Teammate 1 Department:</label>
        <input type="text" id="teammateDept1" name="teammateDept1" placeholder="Enter teammate's department" required />
    </div>
    <div class="form-row">
        <label for="teamLeadWhatsApp">Team Leader WhatsApp Number:</label>
        <input type="tel" id="teamLeadWhatsApp" name="teamLeadWhatsApp" placeholder="Enter team leader's WhatsApp number" required />
    </div>
    <div class="form-row">
        <label for="teammateWhatsApp1">Teammate 1 WhatsApp Number:</label>
        <input type="tel" id="teammateWhatsApp1" name="teammateWhatsApp1" placeholder="Enter teammate's WhatsApp number" required />
    </div>

    <button type="submit">Submit</button>
</form>
  )
}

export default Aistronomy
