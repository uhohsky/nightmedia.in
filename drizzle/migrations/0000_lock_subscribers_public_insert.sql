ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.subscribers;
REVOKE INSERT ON public.subscribers FROM anon, authenticated;