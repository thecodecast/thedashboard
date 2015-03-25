class Case(object):
	def __init__(self, src, dest):
		self.src = src
		self.dest = dest

T = raw_input("")
T = int(T)
cases = []
for x in xrange(0,T):
	src = raw_input("")
	src = int(src)
	dest = raw_input("")
	dest = int(dest)
	cases.insert(1,Case(src, dest))