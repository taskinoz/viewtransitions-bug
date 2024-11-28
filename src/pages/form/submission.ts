export async function POST({ request, redirect }) {
    const formData = await request.formData()
    console.log(formData.get('name'));
    redirect('/success');
}

export async function GET({ redirect }) {
    redirect('/fail');
}