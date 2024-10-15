class JobOffers {
    jobCandidates = [];
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;    
    }

    jobApplication(candidates) {
        const addedCandidates = [];
        candidates.forEach(candidateInfo => {
            let [name, education, yearsExperience] = candidateInfo.split('-');
            yearsExperience = Number(yearsExperience);
            const existingCandidate = this.jobCandidates.find(candidate => candidate.name === name);

            if (existingCandidate) {
                if (yearsExperience > existingCandidate.yearsExperience) {
                    existingCandidate.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name: name, education: education, yearsExperience: yearsExperience});
                addedCandidates.push(name);
            }
        });

        return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        const candidate = this.jobCandidates.find(candidate => candidate.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (minimalExperience > candidate.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        candidate.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find(candidate => candidate.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        
        if (candidate.education === 'Bachelor') {
           
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (candidate.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!');
        }

        const sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        const candidateList = sortedCandidates.map(candidate => `${candidate.name}-${candidate.yearsExperience}`).join('\n');

        return `Candidates list:\n${candidateList}`;
    }
}
