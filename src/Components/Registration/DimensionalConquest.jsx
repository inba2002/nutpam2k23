import React from 'react'

const DimensionalConquest = () => {
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
        <label for="teamLeadEmail">Team Leader Email:</label>
        <input type="email" id="teamLeadEmail" name="teamLeadEmail" placeholder="Enter team leader's email" required />
    </div>
    <div class="form-row">
        <label for="teamLeadWhatsApp">Team Leader WhatsApp Number:</label>
        <input type="tel" id="teamLeadWhatsApp" name="teamLeadWhatsApp" placeholder="Enter team leader's WhatsApp number" required />
    </div>
    <div class="form-row">
        <label for="teamLeadDiscord">Team Leader Discord ID:</label>
        <input type="text" id="teamLeadDiscord" name="teamLeadDiscord" placeholder="Enter team leader's Discord ID" required />
    </div>
    <div class="form-row">
        <label for="teamLeadInGame">Team Leader In-Game ID:</label>
        <input type="text" id="teamLeadInGame" name="teamLeadInGame" placeholder="Enter team leader's in-game ID" required />
    </div>
    <div class="form-row">
        <label for="teamLeadRank">Team Leader Rank:</label>
        <input type="text" id="teamLeadRank" name="teamLeadRank" placeholder="Enter team leader's rank" required />
    </div>
    <div class="form-row">
        <label for="teammate1Name">Teammate 1 Name:</label>
        <input type="text" id="teammate1Name" name="teammate1Name" placeholder="Enter teammate 1's name" required />
    </div>
    <div class="form-row">
        <label for="teammate1ID">Teammate 1 ID:</label>
        <input type="text" id="teammate1ID" name="teammate1ID" placeholder="Enter teammate 1's ID" required />
    </div>
    <div class="form-row">
        <label for="teammate1Rank">Teammate 1 Rank:</label>
        <input type="text" id="teammate1Rank" name="teammate1Rank" placeholder="Enter teammate 1's rank" required />
    </div>
    <div class="form-row">
        <label for="teammate2Name">Teammate 2 Name:</label>
        <input type="text" id="teammate2Name" name="teammate2Name" placeholder="Enter teammate 2's name" required />
    </div>
    <div class="form-row">
        <label for="teammate2ID">Teammate 2 ID:</label>
        <input type="text" id="teammate2ID" name="teammate2ID" placeholder="Enter teammate 2's ID" required />
    </div>
    <div class="form-row">
        <label for="teammate2Rank">Teammate 2 Rank:</label>
        <input type="text" id="teammate2Rank" name="teammate2Rank" placeholder="Enter teammate 2's rank" required />
    </div>
    <div class="form-row">
        <label for="teammate3Name">Teammate 3 Name:</label>
        <input type="text" id="teammate3Name" name="teammate3Name" placeholder="Enter teammate 3's name" required />
    </div>
    <div class="form-row">
        <label for="teammate3ID">Teammate 3 ID:</label>
        <input type="text" id="teammate3ID" name="teammate3ID" placeholder="Enter teammate 3's ID" required />
    </div>
    <div class="form-row">
        <label for="teammate3Rank">Teammate 3 Rank:</label>
        <input type="text" id="teammate3Rank" name="teammate3Rank" placeholder="Enter teammate 3's rank" required />
    </div>
    <div class="form-row">
        <label for="teammate4Name">Teammate 4 Name:</label>
        <input type="text" id="teammate4Name" name="teammate4Name" placeholder="Enter teammate 4's name" required />
    </div>
    <div class="form-row">
        <label for="teammate4ID">Teammate 4 ID:</label>
        <input type="text" id="teammate4ID" name="teammate4ID" placeholder="Enter teammate 4's ID" required />
    </div>
    <div class="form-row">
        <label for="teammate4Rank">Teammate 4 Rank:</label>
        <input type="text" id="teammate4Rank" name="teammate4Rank" placeholder="Enter teammate 4's rank" required />
    </div>
    <div class="form-row">
        <label for="substituteName">Substitute Name:</label>
        <input type="text" id="substituteName" name="substituteName" placeholder="Enter substitute's name" required />
    </div>
    <div class="form-row">
        <label for="substituteID">Substitute ID:</label>
        <input type="text" id="substituteID" name="substituteID" placeholder="Enter substitute's ID" required />
    </div>
    <div class="form-row">
        <label for="substituteRank">Substitute Rank:</label>
        <input type="text" id="substituteRank" name="substituteRank" placeholder="Enter substitute's rank" required />
    </div>
    <button type="submit">Submit</button>
</form>

  )
}

export default DimensionalConquest