import { Candidate } from 'src/candidates/entities/candidate.entity';
import { Event } from 'src/events/entities/event.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('votes')
export class Vote {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Event, (event) => event.id)
    event: Event;

    @Column()
    user_id: string;

    @OneToOne(() => Candidate, (candidate) => candidate.votes)
    candidate_id: Candidate;
}
