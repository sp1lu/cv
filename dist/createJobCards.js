import { jobs } from './seedJobs.js';

const jobExperiences = document.querySelector('.job-experiences');

export const createJobsCards = function () {
    for (const item of jobs) {
        const card = document.createElement('div');
        card.classList.add('card','border', 'border-0', 'bg-dark', 'text-light', 'mb-1', 'p-4');

        const years = document.createElement('div');
        years.classList.add('years', 'text-uppercase', 'fw-medium');
        years.textContent = item.years;
        card.append(years);

        const work = document.createElement('div');
        work.classList.add('job-experience');

        const roleAndAgency = document.createElement('div');
        roleAndAgency.classList.add('role-agency', 'd-flex', 'align-middle');
        work.append(roleAndAgency);

        const role = document.createElement('h4');
        role.classList.add('role');
        role.textContent = item.role;
        roleAndAgency.append(role);

        const agency = document.createElement('a');
        agency.classList.add('agency', 'ms-3', 'pt-1', 'link-underline', 'link-underline-opacity-0');
        agency.textContent = item.agency;
        agency.href = item.link;
        agency.setAttribute('target', '_blank');

        const externalLinkIconSpan = document.createElement('span');

        const externalLinkIcon = document.createElement('i');
        externalLinkIcon.classList.add('bi', 'bi-arrow-up-right', 'fs-6', 'ms-1');
        externalLinkIconSpan.append(externalLinkIcon);

        agency.append(externalLinkIconSpan);

        roleAndAgency.append(agency);

        const description = document.createElement('p');
        description.classList.add('role-description');
        description.textContent = item.description;
        work.append(description);

        jobExperiences.append(card);
        card.append(work);
    }
}