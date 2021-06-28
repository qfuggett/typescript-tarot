interface ChildProps {
    card_title: string;
}


export const Child = ({ card_title }: ChildProps) => {
    return (
        <div>
            Hi there child
            Prop: {card_title}
        </div>
    );
};