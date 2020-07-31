newPlayerForm = `
<form id='playerInfo'>
    <h3>What is your Pirate Name?</h3>
    <label for='name'>Yer Pirate Name:
        <input type='text' id='name' name='name' autofocus placeholder='Name' maxlength=32>
    </label>    
    
    <h3>What crew do ye belong to?</h3>
    <label for='blueTeam'>The Blue Crew:
        <input type='radio' name='teamColor' value='blue' id='blue'>
    </label>

    <label for='greenTeam'>The Green Crew:
        <input type='radio' name='teamColor' value='green' id='green'>
    </label>

    <h3>What type of pirate are you?</h3>
    <label for='captain'>Captain:
        <input type='radio' name='roleType' value='captain' id='captain'>
    </label>

    <label for='crew'>Crew:
        <input type='radio' name='roleType' value='crew' id='crew'>
    </label>

    
    <br>
    <br>
    <button type='submit' id='submit' disabled>Submit</button>
</form>
`
