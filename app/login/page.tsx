import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";


export default function Login() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center px-4">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div>
                <Label></Label>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
