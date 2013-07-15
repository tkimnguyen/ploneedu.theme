from setuptools import setup, find_packages
import os

version = '1.0'

setup(name='ploneedu.theme',
      version=version,
      description="An Installable theme for Plone 4",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        ],
      keywords='',
      author='',
      author_email='',
      url='http://svn.plone.org/svn/collective/',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['ploneedu'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'collective.responsivetheme',
          'Products.EasyAsPiIE',
          'Products.ContentWellPortlets',
          'z3c.jbot>=0.6.0',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      setup_requires=["PasteScript"],
      paster_plugins=["ZopeSkel"],
      )
