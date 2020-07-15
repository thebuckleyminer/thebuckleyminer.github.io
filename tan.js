

let wordBank = ['Ability', 'Abroad', 'Abuse', 'Access', 'Accident', 'Account', 'Act', 'Action', 'Active', 'Activity', 'Actor', 'Ad', 'Addition', 'Address', 'Administration', 'Adult', 'Advance', 'Advantage', 'Advertising', 'Advice', 'Affair', 'Affect', 'Afternoon', 'Age', 'Agency', 'Agent', 'Agreement', 'Air', 'Airline', 'Airport', 'Alarm', 'Alcohol', 'Alternative', 'Ambition', 'Amount', 'Analysis', 'Analyst', 'Anger', 'Angle', 'Animal', 'Annual', 'Answer', 'Anxiety', 'Anybody', 'Anything', 'Anywhere', 'Apartment', 'Appeal', 'Appearance', 'Apple', 'Application', 'Appointment', 'Area', 'Argument', 'Arm', 'Army', 'Arrival', 'Art', 'Article', 'Aside', 'Ask', 'Aspect', 'Assignment', 'Assist', 'Assistance', 'Assistant', 'Associate', 'Association', 'Assumption', 'Atmosphere', 'Attack', 'Attempt', 'Attention', 'Attitude', 'Audience', 'Author', 'Average', 'Award', 'Awareness', 'Baby', 'Back', 'Background', 'Bad', 'Bag', 'Bake', 'Balance', 'Ball', 'Band', 'Bank', 'Bar', 'Base', 'Baseball', 'Basis', 'Basket', 'Bat', 'Bath', 'Bathroom', 'Battle', 'Beach', 'Bear', 'Beat', 'Beautiful', 'Bed', 'Bedroom', 'Beer', 'Beginning', 'Being', 'Bell', 'Belt', 'Bench', 'Bend', 'Benefit', 'Bet', 'Beyond', 'Bicycle', 'Bid', 'Big', 'Bike', 'Bill', 'Bird', 'Birth', 'Birthday', 'Bit', 'Bite', 'Bitter', 'Black', 'Blame', 'Blank', 'Blind', 'Block', 'Blood', 'Blow', 'Blue', 'Board', 'Boat', 'Body', 'Bone', 'Bonus', 'Book', 'Boot', 'Border', 'Boring', 'Boss', 'Bother', 'Bottle', 'Bottom', 'Bowl', 'Box', 'Boy', 'Boyfriend', 'Brain', 'Branch', 'Brave', 'Bread', 'Break', 'Breakfast', 'Breast', 'Breath', 'Brick', 'Bridge', 'Brief', 'Brilliant', 'Broad', 'Brother', 'Brown', 'Brush', 'Buddy', 'Budget', 'Bug', 'Building', 'Bunch', 'Burn', 'Bus', 'Business', 'Button', 'Buy', 'Buyer', 'Cabinet', 'Cable', 'Cake', 'Calendar', 'Call', 'Calm', 'Camera', 'Camp', 'Campaign', 'Can', 'Cancel', 'Cancer', 'Candidate', 'Candle', 'Candy', 'Cap', 'Capital', 'Car', 'Card', 'Care', 'Career', 'Carpet', 'Carry', 'Case', 'Cash', 'Cat', 'Catch', 'Category', 'Cause', 'Celebration', 'Cell', 'Chain', 'Chair', 'Challenge', 'Champion', 'Championship', 'Chance', 'Change', 'Channel', 'Chapter', 'Character', 'Charge', 'Charity', 'Chart', 'Check', 'Cheek', 'Chemical', 'Chemistry', 'Chest', 'Chicken', 'Child', 'Childhood', 'Chip', 'Chocolate', 'Choice', 'Church', 'Cigarette', 'City', 'Claim', 'Class', 'Classic', 'Classroom', 'Clerk', 'Click', 'Client', 'Climate', 'Clock', 'Closet', 'Clothes', 'Cloud', 'Club', 'Clue', 'Coach', 'Coast', 'Coat', 'Code', 'Coffee', 'Cold', 'Collar', 'Collection', 'College', 'Combination', 'Combine', 'Comfort', 'Comfortable', 'Command', 'Comment', 'Commercial', 'Commission', 'Committee', 'Common', 'Communication', 'Community', 'Company', 'Comparison', 'Competition', 'Complaint', 'Complex', 'Computer', 'Concentrate', 'Concept', 'Concern', 'Concert', 'Conclusion', 'Condition', 'Conference', 'Confidence', 'Conflict', 'Confusion', 'Connection', 'Consequence', 'Consideration', 'Consist', 'Constant', 'Construction', 'Contact', 'Contest', 'Context', 'Contract', 'Contribution', 'Control', 'Conversation', 'Convert', 'Cook', 'Cookie', 'Copy', 'Corner', 'Cost', 'Count', 'Counter', 'Country', 'County', 'Couple', 'Courage', 'Course', 'Court', 'Cousin', 'Cover', 'Cow', 'Crack', 'Craft', 'Crash', 'Crazy', 'Cream', 'Creative', 'Credit', 'Crew', 'Criticism', 'Cross', 'Cry', 'Culture', 'Cup', 'Currency', 'Current', 'Curve', 'Customer', 'Cut', 'Cycle', 'Dad', 'Damage', 'Dance', 'Dare', 'Dark', 'Data', 'Database', 'Date', 'Daughter', 'Day', 'Dead', 'Deal', 'Dealer', 'Dear', 'Death', 'Debate', 'Debt', 'Decision', 'Deep', 'Definition', 'Degree', 'Delay', 'Delivery', 'Demand', 'Department', 'Departure', 'Dependent', 'Deposit', 'Depression', 'Depth', 'Description', 'Design', 'Designer', 'Desire', 'Desk', 'Detail', 'Development', 'Device', 'Devil', 'Diamond', 'Diet', 'Difference', 'Difficulty', 'Dig', 'Dimension', 'Dinner', 'Direction', 'Director', 'Dirt', 'Disaster', 'Discipline', 'Discount', 'Discussion', 'Disease', 'Dish', 'Disk', 'Display', 'Distance', 'Distribution', 'District', 'Divide', 'Doctor', 'Document', 'Dog', 'Door', 'Dot', 'Double', 'Doubt', 'Draft', 'Drag', 'Drama', 'Draw', 'Drawer', 'Drawing', 'Dream', 'Dress', 'Drink', 'Drive', 'Driver', 'Drop', 'Drunk', 'Due', 'Dump', 'Dust', 
'Duty', 'Ear', 'Earth', 'Ease', 'East', 'Eat', 'Economics', 'Economy', 'Edge', 'Editor', 'Education', 'Effect', 'Effective', 'Efficiency', 'Effort', 'Egg', 'Election', 'Elevator', 'Emergency', 'Emotion', 'Emphasis', 'Employ', 'Employee', 'Employer', 'Employment', 'End', 'Energy', 'Engine', 'Engineer', 'Engineering', 'Entertainment', 'Enthusiasm', 'Entrance', 'Entry', 'Environment', 'Equal', 'Equipment', 'Equivalent', 'Error', 'Escape', 'Essay', 'Establishment', 'Estate', 'Estimate', 'Evening', 'Event', 'Evidence', 'Exam', 'Examination', 'Example', 'Exchange', 'Excitement', 'Excuse', 'Exercise', 'Exit', 'Experience', 'Expert', 'Explanation', 'Expression', 'Extension', 'Extent', 'External', 'Extreme', 'Eye', 'Face', 'Fact', 'Factor', 'Failure', 'Fall', 'Familiar', 'Family', 'Fan', 'Farm', 'Farmer', 'Fat', 'Father', 'Fault', 'Fear', 'Feature', 'Fee', 'Feed', 'Feedback', 'Feel', 'Feeling', 'Female', 'Few', 'Field', 'Fight', 'Figure', 'File', 'Fill', 'Film', 'Final', 'Finance', 'Finding', 'Finger', 'Finish', 'Fire', 'Fish', 'Fishing', 'Fix', 'Flight', 'Floor', 'Flow', 'Flower', 'Fly', 'Focus', 'Fold', 'Following', 'Food', 'Foot', 'Football', 'Force', 'Forever', 'Form', 'Formal', 'Fortune', 'Foundation', 'Frame', 'Freedom', 'Friend', 'Friendship', 'Front', 'Fruit', 'Fuel', 'Fun', 'Function', 'Funeral', 'Funny', 'Future', 'Gain', 'Game', 'Gap', 'Garage', 'Garbage', 'Garden', 'Gas', 'Gate', 'Gather', 'Gear', 'Gene', 'General', 'Gift', 'Girl', 'Girlfriend', 'Give', 'Glad', 'Glass', 'Glove', 'Go', 'Goal', 'God', 'Gold', 'Golf', 'Good', 'Government', 'Grab', 'Grade', 'Grand', 'Grandfather', 'Grandmother', 'Grass', 'Great', 'Green', 'Grocery', 'Ground', 'Group', 'Growth', 'Guarantee', 'Guard', 'Guess', 'Guest', 'Guidance', 'Guide', 'Guitar', 'Guy', 'Habit', 'Hair', 'Half', 'Hall', 'Hand', 'Handle', 'Hang', 'Harm', 'Hat', 'Hate', 'Head', 'Health', 'Hearing', 'Heart', 'Heat', 'Heavy', 'Height', 'Hell', 'Hello', 'Help', 'Hide', 'High', 'Highlight', 'Highway', 'Hire', 'Historian', 'History', 'Hit', 'Hold', 'Hole', 'Holiday', 'Home', 'Homework', 'Honey', 'Hook', 'Hope', 'Horror', 'Horse', 'Hospital', 'Host', 'Hotel', 'Hour', 'House', 'Housing', 'Human', 'Hunt', 'Hurry', 'Hurt', 'Husband', 'Ice', 'Idea', 'Ideal', 'If', 'Illegal', 'Image', 'Imagination', 'Impact', 'Implement', 'Importance', 'Impress', 'Impression', 'Improvement', 'Incident', 'Income', 'Increase', 'Independence', 'Independent', 'Indication', 'Individual', 'Industry', 'Inevitable', 'Inflation', 'Influence', 'Information', 'Initial', 'Initiative', 'Injury', 'Insect', 'Inside', 'Inspection', 'Inspector', 'Instance', 'Instruction', 'Insurance', 'Intention', 'Interaction', 'Interest', 'Internal', 'International', 'Internet', 'Interview', 'Introduction', 'Investment', 'Invite', 'Iron', 'Island', 'Issue', 'Item', 'Jacket', 'Job', 'Join', 'Joint', 'Joke', 'Judge', 'Judgment', 'Juice', 'Jump', 'Junior', 'Jury', 'Keep', 'Key', 'Kick', 'Kid', 'Kill', 'Kind', 'King', 'Kiss', 'Kitchen', 'Knee', 'Knife', 'Knowledge', 'Lab', 'Lack', 'Ladder', 'Lady', 'Lake', 'Land', 'Landscape', 'Language', 'Laugh', 'Law', 'Lawyer', 'Lay', 'Layer', 'Lead', 'Leader', 'Leadership', 'Leading', 'League', 'Leather', 'Leave', 'Lecture', 'Leg', 'Length', 'Lesson', 'Let', 'Letter', 'Level', 'Library', 'Lie', 'Life', 'Lift', 'Light', 'Limit', 'Line', 'Link', 'Lip', 'List', 'Listen', 'Literature', 'Living', 'Load', 'Loan', 'Local', 'Location', 'Lock', 'Log', 'Long', 'Look', 'Loss', 'Love', 'Low', 'Luck', 'Lunch', 'Machine', 'Magazine', 'Mail', 'Main', 'Maintenance', 'Major', 'Make', 'Male', 'Mall', 'Man', 'Management', 'Manager', 'Manner', 'Manufacturer', 'Many', 'Map', 'March', 'Mark', 'Market', 'Marketing', 'Marriage', 'Master', 'Match', 
'Mate', 'Material', 'Math', 'Matter', 'Maximum', 'Maybe', 'Meal', 'Meaning', 'Measurement', 'Meat', 'Media', 'Medicine', 'Medium', 'Meet', 'Meeting', 'Member', 'Membership', 'Memory', 'Mention', 'Menu', 'Mess', 'Message', 'Metal', 'Method', 'Middle', 'Midnight', 'Might', 'Milk', 'Mind', 'Mine', 'Minimum', 'Minor', 'Minute', 'Mirror', 'Miss', 'Mission', 'Mistake', 'Mix', 'Mixture', 'Mobile', 'Mode', 'Model', 'Mom', 'Moment', 'Money', 'Monitor', 'Month', 'Mood', 'Morning', 'Mortgage', 'Most', 'Mother', 'Motor', 'Mountain', 'Mouse', 'Mouth', 'Move', 'Movie', 'Mud', 'Muscle', 'Music', 'Nail', 'Name', 'Nasty', 'Nation', 'National', 'Native', 'Natural', 'Nature', 'Neat', 'Necessary', 'Neck', 'Negative', 'Negotiation', 'Nerve', 'Net', 'Network', 'News', 'Newspaper', 'Night', 'Nobody', 'Noise', 'Normal', 'North', 'Nose', 'Note', 'Nothing', 'Notice', 'Novel', 'Number', 'Nurse', 'Object', 'Objective', 'Obligation', 'Occasion', 'Offer', 'Office', 'Officer', 'Official', 'Oil', 'One', 'Opening', 'Operation', 'Opinion', 'Opportunity', 'Opposite', 'Option', 'Orange', 'Order', 'Ordinary', 'Organization', 'Original', 'Other', 'Outcome', 'Outside', 'Oven', 'Owner', 'Pace', 'Pack', 'Package', 'Page', 'Pain', 'Paint', 'Painting', 'Pair', 'Panic', 'Paper', 'Parent', 'Park', 'Parking', 'Part', 'Particular', 'Partner', 'Party', 'Pass', 'Passage', 'Passenger', 'Passion', 'Past', 'Path', 'Patience', 'Patient', 'Pattern', 'Pause', 'Pay', 'Payment', 'Peace', 'Peak', 'Pen', 'Penalty', 'Pension', 'People', 'Percentage', 'Perception', 'Performance', 'Period', 'Permission', 'Permit', 'Person', 'Personal', 'Personality', 'Perspective', 'Phase', 'Philosophy', 'Phone', 'Photo', 'Phrase', 'Physical', 'Physics', 'Piano', 'Pick', 'Picture', 'Pie', 'Piece', 'Pin', 'Pipe', 'Pitch', 'Pizza', 'Place', 'Plan', 'Plane', 'Plant', 'Plastic', 'Plate', 'Platform', 'Play', 'Player', 'Pleasure', 'Plenty', 'Poem', 'Poet', 'Poetry', 'Point', 'Police', 'Policy', 'Politics', 'Pollution', 'Pool', 'Pop', 'Population', 'Position', 'Positive', 'Possession', 'Possibility', 'Possible', 'Post', 'Pot', 'Potato', 'Potential', 'Pound', 'Power', 'Practice', 'Preference', 'Preparation', 'Presence', 'Present', 'Presentation', 'President', 'Press', 'Pressure', 'Price', 'Pride', 'Priest', 'Primary', 'Principle', 'Print', 'Prior', 'Priority', 'Private', 'Prize', 'Problem', 'Procedure', 'Process', 'Produce', 'Product', 'Profession', 'Professional', 'Professor', 'Profile', 'Profit', 'Program', 'Progress', 'Project', 'Promise', 'Promotion', 'Prompt', 'Proof', 'Property', 'Proposal', 'Protection', 'Psychology', 'Public', 'Pull', 'Punch', 'Purchase', 'Purple', 'Purpose', 'Push', 'Put', 'Quality', 'Quantity', 'Quarter', 'Queen', 'Question', 'Quiet', 'Quit', 'Quote', 'Race', 'Radio', 'Rain', 'Raise', 'Range', 'Rate', 'Ratio', 'Raw', 'Reach', 'Reaction', 'Read', 'Reading', 'Reality', 
'Reason', 'Reception', 'Recipe', 'Recognition', 'Recommendation', 'Record', 'Recording', 'Recover', 'Red', 'Reference', 'Reflection', 'Refrigerator', 'Refuse', 'Region', 'Register', 'Regret', 'Regular', 'Relation', 'Relationship', 'Relative', 'Release', 'Relief', 'Remote', 'Remove', 'Rent', 'Repair', 'Repeat', 'Replacement', 'Reply', 'Report', 'Representative', 'Republic', 'Reputation', 'Request', 'Requirement', 'Research', 'Reserve', 'Resident', 'Resist', 'Resolution', 'Resolve', 'Resort', 'Resource', 'Respect', 'Respond', 'Response', 'Responsibility', 'Rest', 'Restaurant', 'Result', 'Return', 'Reveal', 'Revenue', 'Review', 'Revolution', 'Reward', 'Rice', 'Rich', 'Ride', 'Ring', 'Rip', 'Rise', 'Risk', 'River', 'Road', 'Rock', 'Role', 'Roll', 'Roof', 'Room', 'Rope', 'Rough', 'Round', 'Routine', 'Row', 'Royal', 'Rub', 'Ruin', 'Rule', 'Run', 'Rush', 'Sad', 'Safe', 'Safety', 'Sail', 'Salad', 'Salary', 'Sale', 'Salt', 'Sample', 'Sand', 'Sandwich', 'Satisfaction', 'Save', 'Saving', 'Scale', 'Scene', 'Schedule', 'Scheme', 'School', 'Science', 'Score', 'Scratch', 'Screen', 'Screw', 'Script', 'Sea', 'Search', 'Season', 'Seat', 'Second', 'Secret', 'Secretary', 'Section', 'Sector', 'Security', 'Selection', 'Self', 'Sell', 'Senior', 'Sense', 'Sensitive', 'Sentence', 'Series', 'Serve', 'Service', 'Session', 'Set', 'Setting', 'Shake', 'Shame', 'Shape', 'Share', 'She', 'Shelter', 'Shift', 'Shine', 'Ship', 'Shirt', 'Shock', 'Shoe', 'Shoot', 'Shop', 'Shopping', 'Shot', 'Shoulder', 'Show', 'Shower', 'Sick', 'Side', 'Sign', 'Signal', 'Signature', 'Significance', 'Silly', 'Silver', 'Simple', 'Sing', 'Singer', 'Single', 'Sink', 'Sir', 'Sister', 'Site', 'Situation', 'Size', 'Skill', 'Skin', 'Skirt', 'Sky', 'Sleep', 'Slice', 'Slide', 'Slip', 'Smile', 'Smoke', 'Snow', 'Society', 'Sock', 'Soft', 'Software', 'Soil', 'Solid', 'Solution', 'Somewhere', 'Son', 'Song', 'Sort', 'Sound', 'Soup', 'Source', 'South', 'Space', 'Spare', 'Speaker', 'Special', 'Specialist', 'Specific', 'Speech', 'Speed', 'Spell', 'Spend', 'Spirit', 'Spiritual', 'Spite', 'Split', 'Sport', 'Spot', 'Spray', 'Spread', 'Spring', 'Square', 'Stable', 'Staff', 'Stage', 'Stand', 'Standard', 'Star', 'Start', 'State', 'Statement', 'Station', 'Status', 'Stay', 'Steak', 'Steal', 'Step', 'Stick', 'Still', 'Stock', 'Stomach', 'Stop', 'Storage', 'Store', 'Storm', 'Story', 'Strain', 'Stranger', 'Strategy', 'Street', 'Strength', 'Stress', 'Stretch', 'Strike', 'String', 'Strip', 'Stroke', 'Structure', 'Struggle', 'Student', 'Studio', 'Study', 'Stuff', 'Stupid', 'Style', 'Subject', 'Substance', 'Success', 'Suck', 'Sugar', 'Suggestion', 'Suit', 'Summer', 'Sun', 'Supermarket', 'Support', 'Surgery', 'Surprise', 'Surround', 'Survey', 'Suspect', 'Sweet', 'Swim', 'Swimming', 'Swing', 'Switch', 'Sympathy', 'System', 'Table', 'Tackle', 'Tale', 'Talk', 'Tank', 'Tap', 'Target', 'Task', 
'Taste', 'Tax', 'Tea', 'Teach', 'Teacher', 'Teaching', 'Team', 'Tear', 'Technology', 'Telephone', 'Television', 'Tell', 'Temperature', 'Temporary', 'Tennis', 'Tension', 'Term', 'Test', 'Text', 'Thanks', 'Theme', 'Theory', 'Thing', 'Thought', 'Throat', 'Ticket', 'Tie', 'Till', 'Time', 'Tip', 'Title', 'Today', 'Toe', 'Tomorrow', 'Tone', 'Tongue', 'Tonight', 'Tool', 'Tooth', 'Top', 'Topic', 'Total', 'Touch', 'Tough', 'Tour', 'Tourist', 'Towel', 'Tower', 'Town', 'Track', 'Trade', 'Tradition', 'Traffic', 'Train', 'Trainer', 'Training', 'Transition', 'Transportation', 'Trash', 'Travel', 'Treat', 'Tree', 'Trick', 'Trip', 'Trouble', 'Truck', 'Trust', 'Truth', 'Try', 'Tune', 'Turn', 'Twist', 'Two', 'Type', 'Uncle', 'Understanding', 'Union', 'Unique', 'Unit', 'University', 'Upper', 'Upstairs', 'Use', 'User', 'Usual', 'Vacation', 'Valuable', 'Value', 'Variation', 'Variety', 'Vast', 'Vegetable', 'Vehicle', 'Version', 'Video', 'View', 'Village', 'Virus', 'Visit', 'Visual', 'Voice', 'Volume', 'Wait', 'Wake', 'Walk', 'Wall', 'War', 'Warning', 'Wash', 'Watch', 'Water', 'Wave', 'Way', 'Weakness', 'Wealth', 'Wear', 'Weather', 'Web', 'Wedding', 
'Week', 'Weekend', 'Weight', 'Weird', 'Welcome', 'West', 'Western', 'Wheel', 'Whereas', 'While', 'White', 'Whole', 'Wife', 'Will', 'Win', 'Wind', 'Window', 'Wine', 'Wing', 'Winner', 'Winter', 'Wish', 'Witness', 'Woman', 'Wonder', 'Wood', 'Word', 'Work', 'Worker', 'Working', 'World', 'Worry', 'Worth', 'Wrap', 'Writer', 'Writing', 'Yard', 'Year', 'Yellow', 'Yesterday', 'You', 'Young', 'Youth', 'Zone']


function makeTable(horizontal = 10, vertical = 15) {
    let tableVariable = document.getElementById("assignment2Table");
    tableVariable.innerHTML = constructTable(horizontal, vertical);
}

function randomCardList() {
    let greenRemaining = 9
    let blueRemaining = 8
    let blackRemaining = 1
    let tanRemaining = 7
    let cardList = []

    //This is a coinflip to deside which team goes first
    if (Math.round(Math.random()) === 0) {
        greenRemaining = 9;
        blueRemaining = 8;
    } else{
        greenRemaining = 8;
        blueRemaining = 9;
    }

    for (i = greenRemaining; i > 0; i--) {
        cardList.push("tan")
    }
    for (i = blueRemaining; i > 0; i--) {
        cardList.push("tan")
    }
    for (i = blackRemaining; i > 0; i--) {
        cardList.push("tan")
    }
    for (i = tanRemaining; i > 0; i--) {
        cardList.push("tan")
    }

    let chosenCard = ""
    let outputRandomCardlist = []

    for (i = 25; i > 0; i--) {
        chosenCard = Math.floor(Math.random()*cardList.length) // This chooses a random card from the source list
        outputRandomCardlist.push(cardList[chosenCard]) // This puts that one in the output card list
        cardList.splice(chosenCard,1) // This removes it from the source list
    }

    return outputRandomCardlist
}

function chooseAWord() {
    let chosenWord = ''
    chosenWordNumber = Math.floor(Math.random()*wordBank.length) // This chooses a random card from the source list
    chosenWord = wordBank[chosenWordNumber]
    wordBank.splice(chosenWordNumber,1) // This removes it from the source list
    return chosenWord
}

function constructTable(horizontal, vertical) {
    let htmlOutput = "";
    let i = 0;
    let j = 0;
    let classColor = "black";
    let cardOrder = randomCardList()
    let counter = 0
    
    htmlOutput += "<table>"
    for (i = horizontal; i > 0; i--) {
        htmlOutput += "<tr>";
        for (j = vertical; j > 0; j--) {
            classColor = cardOrder[counter];
            counter += 1;
            htmlOutput += "<td class=\"" + classColor + " square\"><div class=\"wordbox\">" + chooseAWord() + "</div></td>";        
        }
        htmlOutput += "</tr>";
    }
    htmlOutput += "</table>"
    return htmlOutput;
}
















