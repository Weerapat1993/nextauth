import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
    title: string
    children: React.ReactNode
}

const CustomCard: React.FC<Props> = ({ title, children }) => {
    return (
        <Card>
            {title ? (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
            ) : null}
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default CustomCard