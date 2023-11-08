import Item from './Item';
import { Experience } from '../../../types/';

export default function ExperienceList({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <div className='flex h-[98px] w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800'>
      {experiences.map((experience) => (
        <Item key={experience.id} {...experience} />
      ))}
    </div>
  );
}
